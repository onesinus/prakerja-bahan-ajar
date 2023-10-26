function sumItems(data) {
    let total_data = 0
    for (let i = 0; i < data.length; i++) {
       total_data += data[i]
    }
    return total_data
}
console.log(sumItems([2, 7, 5, 4, 1])) // 19