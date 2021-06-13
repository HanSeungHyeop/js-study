const dog = {
    _name: '멍멍이',
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
}
console.log(dog._name);
dog.name = '몽몽이';
console.log(dog._name);