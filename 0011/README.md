#### pad

> 给字符串的左右加padding,也可以用于删减字符串两端

```用法```：pad(str, length, options)|pad(length, str, options)

```options```:

- char (string)： 指定字符填充

- colors (boolean)：Ajust to hidden terminal color characters, you may also use require 'pad/lib/colors' to avoid passing this option.

- strip (boolean)：要求的长度小于原字符串长度，会对原字符串删减，默认false

- fixed_width (boolean)：An optimization option to disable the usage of the wcwdith package to handle the discovery of characters using more than one column for display. one column to display

- wcwidth_options (object)：Options passed to the wcwidth package used to calculate the display width of characters using more than one column.

```返回```：string