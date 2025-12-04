#!/usr/bin/env python3
"""
Module that lists all documents in a MongoDB collection
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection
    
    Args:
        mongo_collection: pymongo collection object
    
    Returns:
        List of documents, or empty list if no documents
    """
    # Find all documents and convert cursor to list
    documents = list(mongo_collection.find())
    
    # Return the list (empty if no documents)
    return documents
