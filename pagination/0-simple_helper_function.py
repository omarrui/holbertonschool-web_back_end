#!/usr/bin/env python3
def index_range(page, page_size):
    """a functiont that takes two variables for the index range"""
    index_range = (page, page_size)
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)