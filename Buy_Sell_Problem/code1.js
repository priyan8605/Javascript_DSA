// “Best Time to Buy and Sell Stock” problem is a classic LeetCode question. Let’s break it down step by step and then solve it in JavaScript.
// 📝 Problem Statement
// You are given an array of prices where prices[i] is the price of a stock on day i.
// You want to maximize your profit by choosing one day to buy and one day to sell.
// Return the maximum profit you can achieve. If no profit is possible, return 0.


const arr=[7,1,5,3,6,4]

function maxProfit(arr)
{
let maxProfit=0
let buyPrice=arr[0]
let sellPrice=null
for(let i=0;i<arr.length-1;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        let result=arr[j]-arr[i]
        if(result>maxProfit)
        {
            maxProfit=result
            buyPrice=arr[i]
            sellPrice=arr[j]
        }
    }
}
return { maxProfit, buyPrice, sellPrice }
}
console.log(`Brute force answer: ${JSON.stringify(maxProfit(arr))}`) //output : { maxProfit: 5, buyPrice: 1, sellPrice: 6 }

function maxProfitOptimized(arr)
{
    currentMin=arr[0]
    maxProfit=0
    sellPrice=null
    for(let i=1;i<arr.length;i++)
    {

        // can i sell at this price and make a profit? answer is no because 
        // currentMin that represent buy price is greater than the current sellprice, 
        // so we need to update the currentMin to the current price .
        if(currentMin>arr[i])
        {
            currentMin=arr[i]
        }
        {
            // can i sell at this price and make a profit? answer is yes because 
            // currentMin that represent buy price is less than the current sellprice, 
            // so we need to calculate the profit and check if it is greater than the maxProfit.
            const result=arr[i]-currentMin
            // for result we can also use const as resu
            if(result>maxProfit)
            {
                maxProfit=result
                sellPrice=arr[i]
            }
        }
    }
    return { maxProfit, buyPrice: currentMin, sellPrice }

}
console.log(`optimized answer: ${JSON.stringify(maxProfitOptimized(arr))}`  ) //output : { maxProfit: 5, buyPrice: 1, sellPrice: 6 }
