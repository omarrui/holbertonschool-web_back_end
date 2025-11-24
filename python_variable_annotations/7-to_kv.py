#!/usr/bin/env python3
"""
This module provides a function that takes
a string and an int or float,
and returns a tuple with the string and the
square of the number as a float.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with the string and the
    square of the number as a float.

    Args:
        k (str): The key string.
        v (Union[int, float]): The value to be squared.

    Returns:
        Tuple[str, float]: A tuple containing
        the string and the squared value as a float.
    """
    return k, float(v * v)
