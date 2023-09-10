const  object = {
    "sales": [
      {
        "transaction_id": 1,
        "product_name": "Widget A",
        "quantity_sold": 10,
        "total_revenue": 100.0
      },
      {
        "transaction_id": 2,
        "product_name": "Widget B",
        "quantity_sold": 5,
        "total_revenue": 75.0
      },
      {
        "transaction_id": 3,
        "product_name": "Widget A",
        "quantity_sold": 8,
        "total_revenue": 80.0
      },
      {
        "transaction_id": 4,
        "product_name": "Widget C",
        "quantity_sold": 15,
        "total_revenue": 150.0
      }
    ]
  }

// 1  Calculate the total revenue generated from all transactions.
const array = object.sales;


const totelRevenue = array.reduce((acc, curr)=>{
    return acc + curr.total_revenue;
},0)

console.log("totel revenue is " + totelRevenue)

//2 Determine which product generated the highest total revenue.

// function to find the highest totel revenue 
function maxRevenueCalculate(revenueArray){
    let maxRevenue = 0;
    for(let i=0; i<=revenueArray.length; i++){
        if(revenueArray[i]>maxRevenue){
            maxRevenue = revenueArray[i]
        }
    }
    return maxRevenue;
}

const revenueArray = array.map((prop)=>{
    return prop.total_revenue;
})

// calling the function 
console.log("Maximum revenue is " + maxRevenueCalculate(revenueArray))

// 3 Find the average quantity sold per transaction.
// function to calculate  average 
function calculateAverage(qntArrays){
    let sum = 0;
    let n = qntArrays.length
    for(let i=0; i<=qntArrays.length-1; i++){
        sum += qntArrays[i];
    }
    return sum/n
}

const qntArray = array.map((item)=>{
    return item.quantity_sold;
})

// calling function 
console.log("Totel average of quantity sold is " +calculateAverage(qntArray))


