# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# declare even_odd that takes in 1 number param
# if num % 2 == 0
# return even
# else return odd

def even_odd num
  if num % 2 == 0
    "#{num} is even"
  else
    "#{num} is odd"
  end
end

p even_odd reposts1
p even_odd reposts2
p even_odd reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# declare no_vowels and take in 1 string param
# call delete method on string with vowels as param 

def no_vowels str
  str.delete("aeiouAEIOU")
end

p no_vowels(beatles_album1)
p no_vowels(beatles_album2)
p no_vowels(beatles_album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# declare is_pal with 1 string param
# if downcase string reversed == string downcased
  # string is a palindrome
# else return string is not palindrome

def is_pal str
  if str.downcase.reverse == str.downcase
    "#{str} is a palindrome"
  else
    "#{str} is not a palindrome"
  end
end

p is_pal(palindrome_test_case1)
p is_pal(palindrome_test_case2)
p is_pal(palindrome_test_case3)