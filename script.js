function threeSum(arr, target) {
  //your code here
	arr = arr.sort();
	let ans = 0;
	let comp = 0;
	for(let i=0;i<arr.length-2;i++)
		{
			for(let j=i+1;j<arr.length-1;j++)
				{
					for(let k=j+1;k<arr.length;k++)
						{
							ans = arr[i] + arr[j] + arr[k];
							if(ans <= target )
							{
								comp = target - ans;
								if(comp == 1) 
									return ans;
							}
							else if(ans >= target)
							{
								comp = ans - target;
								if(comp == 1)
									return ans;
							}
							else if(ans == target) 
								return ans;
						}
				}
		}

	
}

module.exports = threeSum;
