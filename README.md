jQuery Overflow Tooltip
=======================

A plugin to assign a simple _title_-attribute-based tool tip to elements
that are overflowing past their specified width. This plugin actually
does the check to see if the text is overflowing, so you can just
blindly use jQuery selectors.

Example usage:

    $('td').overflowTooltip();

That's it! Any cells that are overflowing will have tool tips.
Obviously, you want to make sure to use better selectors than this.
