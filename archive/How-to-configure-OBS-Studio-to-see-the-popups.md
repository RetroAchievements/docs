In "Window Capture" mode, OBS Studio will not capture the popups. The popups are rendered using a "Layered Window", and OBS Studio removed support for capturing layered windows

If you want to include the popups in your stream, you have two options: change to "Display Capture" mode, or add a second "Window Capture" for the "TransparentOverlayWindow". This page will attempt to walk you through doing the second.

Add a second "Window Capture" source to the Scene. In the popup dialog, select the "TransparentOverlayWindow".

![Add second "Window Capture"](https://user-images.githubusercontent.com/32680403/60403262-2e6f8a80-9b58-11e9-8161-52231c43beac.png)

You'll probably notice the window is pink.

![Pink overlay](https://user-images.githubusercontent.com/32680403/60403275-3fb89700-9b58-11e9-9cf3-7e8eb796f079.png)

Add a filter to the second "Window Capture"

![Add filter](https://user-images.githubusercontent.com/32680403/60403279-4941ff00-9b58-11e9-8776-160772d8cd3f.png)

Add a "Color Key" filter, set the Key Color Type to "Custom Color", then use the Select Color dialog to enter `#FF01FE` as the color. Decrease the similarity to 1 and the opacity to 90.

![Color Key properties](https://user-images.githubusercontent.com/32680403/60403281-5232d080-9b58-11e9-8c9c-adeb09cb3924.png)

Finally, if you still have a bit of a pink border showing up, enable a Scale Filter. They all seem to eliminate the remnant, so choose whichever you like best.

![Scale Filter](https://user-images.githubusercontent.com/32680403/60403289-79899d80-9b58-11e9-9a72-cf600f700560.png)
