class StaticString {
    static stMethod(str) {
        if(str.includes("welcome"))
        {
            return true;
        }   
    }
  }
  console.log(StaticString.stMethod("welcome to srm"));