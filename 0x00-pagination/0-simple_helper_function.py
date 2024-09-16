#!/usr/bin/env python3
"""
this is a simple helper function for a pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    this function must take in two parameters page
    and page_size the page will tell us which page
    we will get to and the page_size will tell us
    the numbers of content per page
    """
    start = (page - 1) * page_size
    stop = start + page_size
    return (start, stop)
