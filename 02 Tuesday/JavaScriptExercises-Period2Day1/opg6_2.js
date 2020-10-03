// 6 Extra Reusable Modules with Closures

// 2)
function MyObject(name, age) {
    let setName = name,
    setAge = age

    const getInfo = () => {
        return [setName, setAge].join(", ")
    }

    const setFullName = n => {
        setName = n
    }
    const setFullAge = a => {
        setAge = a
    }

    return {
        getInfo,
        setFullName,
        setFullAge
    }
}

console.log(MyObject("Peter","45").getInfo());
