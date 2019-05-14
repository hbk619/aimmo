# -*- coding: utf-8 -*-
import os
import sys

from setuptools import find_packages, setup

withcoverage = os.environ.get("WITH_COVERAGE")

setup(
    name="aimmo-game-worker",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["flask", "requests"],
    tests_require=["httmock", "mock"],
    test_suite="tests",
    zip_safe=False,
)
