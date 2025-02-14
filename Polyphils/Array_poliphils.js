// poliphills are the user defined functions which are user compatible

// myAt 
// Signature 
// -> )it takes both positive and negative value as an index
// -> )return the element if exists else undefined

if( !Array.prototype.myAt)
{
    Array.prototype.myAt=function ( index )
    {
        return index < 0 ? this[this.length +Number( index)] : this[index]

    }
}

//myConcat
//Signature
// takes n..args and inserts into  a new array.
// returns new array
if( !Array.prototype.myConcat)
{
    Array.prototype.myConcat= function(...args)
    {
        let new_arr = [...this];
        for( let i of args)
        {
            if(Array.isArray(i))
            {
                for(let  item of i) new_arr[new_arr.length++] = item;
            }
            else
            {
                new_arr[new_arr.length++] = i;
            }
        }
        return new_arr;

    }
}

//helper function

const changer  = ( num , len)=>
    {
        if( num >= 0 )
        {
            if(num>len) return len;
            return num;
        }
        if(num <0 && num < -len) return 0;
        if(num <0 && num >= -len ) return len + num;
    }


// myCopyWithIn
// Signature :
// it takes an index and start index and end index 
// and return modified array with copied elements

if( ! Array.prototype.myCopyWithIn)
{
    Array.prototype.myCopyWithIn = function(target , start = 0 , end = this.length)
    {
        
        target = changer(target, this.length);
        start = changer(start, this.length);
        end= changer(end, this.length);   
        console.log(target , start , end);
            
        let new_arr = [...this];
        for ( let i = start; i < Math.min(end , this.length) && target <  this.length ; i++)
        {
            this[target++] = new_arr[i];
           
            
            
        }
        return this;
     

    }
}


// every()
// Signature
// takes a func as arg and returns bool value
// if all values satisfy given condition
if(! Array.prototype.myEvery)
{
    Array.prototype.myEvery= function(call_func)
    {
        if( typeof (call_func) !== 'function')  throw TypeError;
        for( let i =0 ; i< this.length ; i++)
        {
            if(!(call_func(this[i],i, this))) return false;
        }
        return true;

    }
}




// mySome()
// Signature
// takes a func as arg and returns bool value
// if any one value satisfy given condition return true
if(! Array.prototype.mySome)
    {
        Array.prototype.mySome= function(call_func)
        {
            if( typeof (call_func) !== 'function')  throw TypeError;
            for( let i =0 ; i< this.length ; i++)
            {
                if(call_func(this[i],i, this)) return true;
            }
            return false;
    
        }
    }


    
if( !Array.prototype.myFill)
{
    Array.prototype.myFill = function(ele , start = 0 , end = this.length)
    {
        start = changer(start);
        end = changer(end);
        for( let i =start ; i < end ; i++)
        {
            this[i] = ele;2
        }
        return this;
    }
}



// myFilter
// Signature
// it takes call back func as arg and return the array
// array containing elements which ever satisfy condition

if (! Array.prototype.myFilter)
{
    Array.prototype.myFilter = function(call_func)
    {
        if(typeof call_func !== 'function') throw TypeError;
        let new_list = [];
        for(let i =0 ; i < this.length ; i++)
        {
            if(call_func(this[i] , i , this))
                new_list[new_list.length++] = this[i];
        }
        return new_list;
    }
}

// myFind
// signature
// it takes an call back function and reurns a value which satisfies call back function

if( ! Array.prototype.myFind)
{
    Array.prototype.myFind = function(call_func){
        if(typeof call_func !== 'function') throw TypeError;
        for(let i =0 ; i < this.length ; i++)
        {
            if(call_func(this[i], i , this)) return this[i]
        }
    }
}


// myFindLast
// signature
// it takes an call back function and reurns a value which satisfies call back function
// unlike find functions it scans from right to left

if( ! Array.prototype.myFindLast)
    {
        Array.prototype.myFind = function(call_func){
            if(typeof call_func !== 'function') throw TypeError;
            for(let i =this.length-1 ; i >= 0 ; i--)
                {
                    if(call_func(this[i], i , this)) return this[i]
                }
            }
        }
        
        
// myFindIndex
// signature
// it takes an call back function and reurns a index which satisfies call back function
//returns -1 if no such value availble

if( !Array.prototype.myFindIndex)
{
    Array.prototype.myFindIndex= function(call_func)
    {
        if(typeof call_func !== 'function') throw TypeError;
        for(let i =0 ; i < this.length ; i++)
        {
            if(call_func(this[i] , i , this)) return i;
        }
        return -1;
    }
}

// myFindLastIndex
// signature
// it takes an call back function and reurns a index which satisfies call back function
//returns -1 if no such value availble
// unlike findIndex it will start scanning from right to left

if( !Array.prototype.myFindLastIndex)
    {
        Array.prototype.myFindIndex= function(call_func)
        {
            if(typeof call_func !== 'function') throw TypeError;
            for(let i =this.length ; i >=0 ; i--)
            {
                if(call_func(this[i] , i , this)) return i;
            }
            return -1;
        }
    }


// myForEach
// Signature
// it will pass through every Element and apply the func

if(! Array.prototype.myForEach)
{
    Array.prototype.myForEach = function(call_func){
        if(typeof call_func !=='function') throw TypeError;
        for( let i =0 ; i< this.length ; i++)
        {
            call_func(this[i],i,this);
        }

    }
}

// myIncludes
// signature 
// it will take an item and start index as an argument and retuns bool value
if( ! Array.prototype.myIncludes)
{
    Array.prototype.myIncludes = function( ele , start = 0)
    {
        start = changer(start, this.length);
        for (let i of this)
        {
            if(i === ele) return true;
        }
        return false;

    }

}

// myIndexOf
// Signature
// it takes two args element and start index and returns the elemnt index 
// if not availble it returns -1

if( ! Array.prototype.myIndexOf)
{
    Array.prototype.myIndexOf = function(ele , start = 0)
    {
        start = changer(start);
        for(let i = start ; i< this.length; i++)
        {
            if(ele === this[i]) return i;
        }
        return -1;
    }
}

// myLastIndexOf
// Signature
// it takes two args element and start index and returns the elemnt index 
// if not availble it returns -1

if( ! Array.prototype.myLastIndexOf)
    {
        Array.prototype.myLastIndexOf = function(ele , start = this.length)
        {
            start = changer(start);
            for(let i = start ; i >= 0; i--)
            {
                if(ele === this[i]) return i;
            }
            return -1;
        }
    }


// myJoin()
// it takes an array as an argument and returns a String
// by combining all elements by specified seperator
function combine(p,sep = ",") {
    let str ="";
        for( let i of p)
        {
            if(Array.isArray(i)) str+=combine(i,sep);
            else if(i !== null&& i!==undefined)str+=(String(i)+sep);
            else if(i === null || i ===undefined) str+=sep; //[1,2,3,4,,[1,2,3,["uday",4]]
        }

  
    return str;
    
}
if(! Array.prototype.myJoin)
{
    Array.prototype.myJoin = function(sep = ",")
    {
        let str = combine(this , sep)
        return str.substring(0,str.length-1);

    } 
}


//map methods
// it takes an callback function as an arguments and maps its values in a new Array

if( !Array.prototype.myMap)
{
    Array.prototype.myMap = function(call_back)
    {
        if( typeof call_back !== 'function') throw TypeError;
        let new_list = [];
        for(let i =0 ; i< this.length; i++)
        {
            new_list[new_list.length ++] = call_back(this[i], i , this);

        }
        return new_list;

    }
}


// myPop
// Signature
// it won't takes any parameters and returns the last element by removing from the array .

if( !Array. prototype.myPop)
{
    Array.prototype.myPop = function()
    {
        if( this.length <= 0) return;
       
        let last_item = this[this.length -1];
        this.length = this.length-1;
        return last_item;   
    }
}

// myPush
// Signature 
// it takes n args and insert them into the array 
// and returns the length of the array 

if( ! Array.prototype.myPush)
{
    Array.prototype.myPush= function(...arg)
    {
        for (let i of arg)
        {
            this[this.length++] = i;
        }
        
        return this.length;
    }

}


// myreverse
// SIgnature
// it wont takes any argument any revert the array inplace  

if( ! Array.prototype.myReverse)
{
    Array.prototype.myReverse = function()
    {
        let st = 0;
        let end = this.length-1;
        while(st < end)
        {
            [this[st++],this[end--]] = [this[end],this[st]]
        }
        return this;
    }

}


// myShift 
// Signature 
// it won't take any argument and returns the first element by removing it from the array

if(! Array. prototype.myShift)
{
    Array.prototype.myShift = function()
    {
        if( this.length <= 0 ) return;
        let first_ele = this[0];
        for( let i =1 ; i< this.length ; i++)
        {
            this[i-1] = this[i];
        }
        this.length = this.length-1;
        return first_ele;
    }
}

// mySlice
// Signature
// it takes start and end index as arg and return a shallow copy of array

if( !Array.prototype.mySlice)
{
    Array.prototype.mySlice = function( start = 0  , end = this.length )
    {
        let new_list=[];
        start = changer(start,this.length);
        end = changer(end,this.length);
        for ( let i = start ; i < end ; i++) new_list[new_list.length++] = this[i];
        console.log(this.length)
        return new_list;           

    }
}

// mySort 
// it takes a function as an arg and sorts the Array
// if( -1 ->a)(+1 -> b) in this way it's sorted
if( !Array.prototype.mySort)
{
    Array.prototype.mySort= function( call_back=(a,b)=> a-b)
    {
        for(let i =0 ; i< this.length ; i++)
        {
            let min = i
            for(let j =i+1; j<this.length ; j++ )
            {
                if(call_back(this[min],this[j])>0 ) min = j ;
            }
            [this[min], this[i]] = [this[i],this[min]]
        }
        return this;

    }
}

// mySplice
// Signature 
// it takes 3 args namely start and no of removals and insert data
// by default all items are deleted


if( !Array.prototype.mySplice)
{
    Array.prototype.mySplice= function(index,removals= this.length,...args)
    {
        index= changer(index, this.length);
        removals = removals < 0 ? 0 : removals;
        let new_list= [];
        for(let i = index ; i <  Math.min(index+removals,this.length ); i++)
             new_list[new_list.length++] = this[i];
        for( let i = this.length+removals-args.length-1 ; i >=index+removals ; i--) this[i] = this[i-removals];
        for(let i of args) this[index++]=i;
        return new_list;
    }
  
}


// myUnshift
// signature
// it takes n elements as an argument and insert them into the array at first index
if(!Array.prototype.myUnshift)
{
    Array.prototype.myUnshift= function(...args)
    {
        for(let i = this.length+args.length-1 ; i>=args.length ; i--)
        {
            this[i] = this[i-args.length]; 
        }
        for(let i = 0 ; i< args.length ; i++)
        {
            this[i] = args[i];
        }
        return this.length;
    }
}

// // myWith
// // Signature 
// // it will replaces the given element index and creates a new array
if( ! Array.prototype.myWith)
{
    Array.prototype.myWith= function(index, value)
    {
        index = changer(index, this.length);
        let new_arr = [...this];
        new_arr[index] = value;
        return new_arr;

    }
}

// myFlat
// Signature 
// it takes depth as an arg and conversts nested array into a linear array
if(! Array.prototype.myFlat)
{
    
    Array.prototype.myFlat= function(depth =1)
    {
        let new_list= [];
        const combine=(obj, d )=>
        {
            for(i of obj)
            {
                if(Array.isArray(i) && d <depth)
                {
                    combine(i,++d);
                }
                else new_list[new_list.length++] = i;
            }
        }
        combine(this,0);
        return new_list;

    }
    
}

// myReduce
// signature
// // it returns reduced value 
// it takes an call back func
if(!Array.prototype.myReduce)
{
    Array.prototype.myReduce = function(call_back, intial){
        if (typeof call_back !== 'function') { 
            throw TypeError;
            
        }
        let st=0
        if( intial == undefined) 
            {
                intial= this[0];
                st++;
            }
  
        for(let i = st ; i< this.length ; i++)
        {
            intial = call_back(intial, this[i]);

        }
        return intial;

    }
}




































