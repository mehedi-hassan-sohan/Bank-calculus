document.getElementById('btn-deposit').addEventListener('click',function(){
      const depositFild =document.getElementById('deposit-fild')
      const NewdepositeAmountstring = depositFild.value
      const NewdepositreAmount = parseFloat(NewdepositeAmountstring)
       
      const depositeAmountfild = document.getElementById('deposit-total')
       const perviousdepositetotalstring = depositeAmountfild.innerText;
       const perviousdepositetotal = parseFloat(perviousdepositetotalstring)
       const carenttotal = perviousdepositetotal + NewdepositreAmount
       
       depositeAmountfild.innerText= carenttotal 

       const balancetTotalelement = document.getElementById('total-balance')
      const pervioustotalstring = balancetTotalelement.innerText
      const perviousBalanceTotal = parseFloat(perviousdepositetotalstring) 

      const carentbalance = perviousBalanceTotal + NewdepositreAmount 

      balancetTotalelement.innerText = carentbalance
      //  step 7

      depositFild.value = ''
     
 })