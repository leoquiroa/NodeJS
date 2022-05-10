const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
    console.log('foo')
    bar()
    baz()
}
foo()

/*
foo
bar
baz
*/

//Call Stack
//Message Queue

const bar1 = () => console.log('bar1')
const baz1 = () => console.log('baz1')
const foo1 = () => {
    console.log('foo1')
    setTimeout(bar1,1000)
    baz1()
}
foo1()

/*
foo1
baz1
bar1
*/