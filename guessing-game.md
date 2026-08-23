from pathlib import Path

doc = """# Guessing Game

## Objective

Build a simple interactive guessing game where the user tries to guess a randomly generated number within a selected range. The game provides hints when the guess is too high or too low and limits the number of attempts.

## Workflow

1. User enters the lower and upper bounds.
2. The program generates a random number within that range using `random.randint()`.
3. The program calculates the maximum number of guesses based on the range.
4. User enters a guess.
5. The program compares the guess with the generated number.
6. It displays whether the guess is too high, too low, or correct.
7. The game continues until the number is guessed or the maximum attempts are reached.
8. If all attempts are used, the program reveals the generated number.

## Tech Stack

- **Python** – Game logic and number-guessing functionality
- **random** – Generates the random number
- **math** – Calculates the maximum number of guesses
- **React** – User interface
- **Vite** – Development and build tool
- **GitHub** – Source code hosting and version control
- **GitHub Pages** – Project hosting/deployment

## Project Summary

A beginner-friendly guessing game demonstrating Python fundamentals such as user input, variables, random number generation, mathematical calculations, conditional statements, and `while` loops. The project is presented as a web application using React and Vite and is hosted on GitHub Pages.

## Hosting

The project is hosted on **GitHub Pages** using a **Vite build**. The Vite application is built into static files and deployed to GitHub Pages so the project can be accessed through a web browser.
"""

path = Path("/mnt/data/Guessing-Game-Updated-Documentation.md")
path.write_text(doc, encoding="utf-8")
print(path)
