/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Initialize a stack to store the opening parentheses
    let stack = [];
    
    // Map of matching parentheses
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // If it's a closing bracket
        if (map[char]) {
            // Pop from stack, if it's empty assign a dummy value
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the top of the stack doesn't match the corresponding opening parenthesis
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, then the string is valid
    return stack.length === 0;
};
