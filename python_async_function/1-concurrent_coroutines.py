#!/usr/bin/env python3
"""
This module defines an asynchronous coroutine that spawns multiple
wait_random coroutines concurrently and returns their delays in ascending order.
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times concurrently with a given max_delay and
    returns a list of all delays in ascending order as they complete.

    Args:
        n (int): The number of wait_random coroutines to spawn.
        max_delay (int): Maximum number of seconds for each delay.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    tasks = [
        asyncio.create_task(wait_random(max_delay))
        for _ in range(n)
    ]
    completed = []

    for task in asyncio.as_completed(tasks):
        result = await task
        completed.append(result)
    return completed
    