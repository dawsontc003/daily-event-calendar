# daily-event-calendar

# Description:

This webpage hosts a single day event planner. Designed for the ordinary work day with time slots from 9AM to 5PM. This allows any user accessing the webpage to input and save events or tasks in the designated time slot of their preference. The Java code leveraging the HTML time slots indicates to the user if the time slot is in past, present, or future by color code gray = past, red = present, and green = future. Once an event or task is saved it is stored to the local storage of the user's browser allowing the event to be presisted until the user overrides by saving a new event in the same time slot or by clearing their browswer memory.

# Challenges:

The challenges in this build were surrounded mostly by the choice of decided to levarage Java dom manipulation or HTML for the time blocks. Based on the user experience of the time blocks steadily displaying to a user at all times it made since to leverage static HTML to display elements. The second challenge was making the text box color dynamic using an existing CSS class not attached in the static HTML. To solution this Java code was set to target the existing HTML class for the element and transform that class based on a comparison betweent the hour in the day and the time slot hour itself to determine which CSS class should apply to a given text block. The repitativeness of the code tailored to each given timeblock was intentional so that local storage can ensure unique items were stored for all time blocks.

![Scheduler screen print](https://user-images.githubusercontent.com/69283624/97114787-3c83db80-16b8-11eb-9fd5-3c42c2c29b0a.PNG)

![scheduler screen print 2](https://user-images.githubusercontent.com/69283624/97114789-3f7ecc00-16b8-11eb-8e3d-3c28ba626331.PNG)
