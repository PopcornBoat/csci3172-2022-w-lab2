# Lab 2

* repo: https://git.cs.dal.ca/yuxuanw/l2_wang_yuxuan.git
* url: https://web.cs.dal.ca/~yuxuanw/csci3172/lab2/l2_wang_yuxuan

## Authors

* [Yuxuan Wang](yx703587@dal.ca) - *(Developer)*

## Short answer questions

1. the const variable is block-scoped
> An example is here: the output in console would be 4 and 3, because ```const a = 4``` is in another block, but if I remove the curly brackets, there would be an error.
```
const a = 3;
{
    const a = 4;
    console.log(a);
}
console.log(a);
```

2. both const and let are add in ES6 (2015)