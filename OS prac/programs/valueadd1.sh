#!/bin/bash
# Part A: quoting and substitution
num=10
x=*
y=`date`
a="Hello, 'he sai"
echo num
echo $num
echo $x
echo '$x'
echo "$x"
echo $y
echo $(date)
echo $a
echo \$num
echo \$$num
# Part B: arguments and arithmetic
echo "Number of arguments = $#"
echo "All arguments = $*"
sum=$(expr $1 + $2)
echo "Sum of $1 and $2 = $sum"
# Part C: if statement
if [ $1 -gt $2 ]; then echo "$1 is greater than $2"
elif [ $1 -eq $2 ]; then echo "$1 is equal to $2"
else echo "$1 is less than $2"
fi
# Part D: case structure
case $2 in
    1) echo "Second argument is one" ;;
    5) echo "Second argument is five" ;;
    *) echo "Second argument is something else" ;;
esac
# Part E: for and while loops
for i in 1 2 3; do echo "for loop : $i"; done
i=1
while [ $i -le 3 ]; do echo "while loop : $i"; i=$((i+1)); done
