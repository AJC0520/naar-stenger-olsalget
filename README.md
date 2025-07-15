# Ølsalg Status App

A simple React project that checks whether beer sales are currently open in Norway. It considers the current day, time, and public holidays using data from [webapi.no](https://webapi.no).

## Features

- Displays whether beer sales are open or closed
- Fetches Norwegian holidays automatically
- Live countdown until beer sale closing time
- Handles the following rules:
  - Sundays: always closed
  - Saturdays: closes at 18:00
  - Weekdays (Mon–Fri): closes at 20:00
  - Public holidays: closed

## How It Works

- On component load, it checks today's date and time.
- It fetches public holidays from the `webapi.no` API.
- If it's a Sunday or a public holiday, beer sales are marked as closed.
- If open, it displays a live countdown to closing time.
- Updates every second using `setInterval`.


