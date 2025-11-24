#!/usr/bin/env python3
"""
This module provides a function
to create multiplier functions.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies
    its input by the given multiplier.

    Args:
        multiplier (float): The value to multiply by.

    Returns:
        Callable[[float], float]: A function that multiplies
        a float by multiplier.
    """
    def innerFunction(x: float) -> float:
        """
        Multiplies x by the multiplier.

        Args:
            x (float): The value to multiply.

        Returns:
            float: The result of x * multiplier.
        """
        return x * multiplier
    return innerFunction
