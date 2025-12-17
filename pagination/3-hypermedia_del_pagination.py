#!/usr/bin/env python3
"""
Pagination helper function module.
"""

# Import Tuple type for type hints
from typing import Tuple
# Import csv module to read CSV files
import csv
# Import math module for math.ceil() function
import math
# Import List and Dict types for type hints
from typing import List, Dict


def index_range(page, page_size):
    """
    a functiont that takes two variables for the index range
    """
    # Calculate starting index: page 1 starts at 0, page 2 at 10, etc.
    start = (page - 1) * page_size
    # Calculate ending index: start + how many items per page
    end = start + page_size
    # Return both as a tuple
    return (start, end)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    # Name of the CSV file to read
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        # Initialize private variable to store dataset (starts as None)
        self.__dataset = None
        # Initialize private variable to store indexed dataset (starts as None)
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        # Check if dataset hasn't been loaded yet
        if self.__dataset is None:
            # Open the CSV file
            with open(self.DATA_FILE) as f:
                # Create a CSV reader object
                reader = csv.reader(f)
                # Read all rows from the CSV into a list
                dataset = [row for row in reader]
            # Store everything except the header row (skip first row)
            self.__dataset = dataset[1:]

        # Return the cached dataset
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> list[list]:
        """
        get a specific page forem the dataset
        """
        # Make sure page is an integer and greater than 0
        assert isinstance(page, int) and page > 0
        # Make sure page_size is an integer and greater than 0
        assert isinstance(page_size, int) and page_size > 0

        # Calculate start and end indexes for this page
        start, end = index_range(page, page_size)
        # Get the full dataset
        dataset = self.dataset()

        # If start index is beyond the dataset, return empty list
        if start > len(dataset):
            return []

        # Return only the rows for this page (slice from start to end)
        return dataset[start:end]

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        # Check if indexed dataset hasn't been created yet
        if self.__indexed_dataset is None:
            # Get the full dataset
            dataset = self.dataset()
            # Create first 1000 rows (NOT USED - can be removed!)
            truncated_dataset = dataset[:1000]
            # Create dictionary: {0: row0, 1: row1, 2: row2, ...}
            # Key = index number, Value = the row data
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        # Return the cached indexed dataset
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        makin sure the data is valid
        """
        # Make sure index is not None
        assert index is not None
        # Make sure index is within valid range (0 to dataset length)
        assert 0 <= index < len(self.indexed_dataset())

        # Get the indexed dataset (dictionary format)
        indexed_data = self.indexed_dataset()
        # Create empty list to store the page data
        data = []
        # Start at the requested index
        current_index = index

        # Keep looping while:
        # 1. We don't have enough items yet (len(data) < page_size)
        # 2. We haven't reached the end (current_index < dataset length)
        while len(data) < page_size and current_index < len(indexed_data):
            # Check if this index exists in the dictionary (not deleted)
            if current_index in indexed_data:
                # Add this row to our data list
                data.append(indexed_data[current_index])
            # Move to the next index (whether it exists or not)
            current_index += 1

        # Save where we stopped (for next page request)
        next_index = current_index

        # Return dictionary with all pagination info
        return {
            'index': index,              # Where we started
            'data': data,                # The actual rows we collected
            'page_size': len(data),      # How many rows we actually got
            'next_index': next_index     # Where to start next time
        }
