#!/usr/bin/env python3
"""
This module provides task_wait_n, which schedules multiple
task_wait_random tasks and returns their results in ascending order.
"""

import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> list[float]:
    """
    Spawn n task_wait_random tasks and return the list of delays
    in ascending order.

    Args:
        n (int): Number of tasks to run.
        max_delay (int): Maximum delay for each wait_random.

    Returns:
        list[float]: List of delay values sorted from smallest to largest.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    results = [await task for task in tasks]
    return sorted(results)
