function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute(){
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=principal*rate*years/100;
    var year=new Date().getFullYear() + parseInt(years);
    var amount=parseInt(principal)+parseFloat(interest);
    var result=document.getElementById("result");
    if (principal <=0){
        alert("Please enter a valid amount!")
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML="Depositing $"+"<mark>"+principal+"</mark>"+" at the rate of "+"<mark>"+rate+"</mark>"+"%"+" will get you $"+"<mark>"+amount+"</mark>"+" in "+"<mark>"+year+"</mark>"+".";
    }
    
}

