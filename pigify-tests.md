Describe: Pigify()

test: 'should return 'away' if passed 'a''
code:
let input = 'a'
pigify(input)
expect: 'away'

test: 'should append 'way' to any word starting with a vowel'
code: 
let input = 'a long way away'
pigiy(input)
expect: 'away long way awayway'

test: 'should check for 'qu' at the start of a word and move both letters to the end'
code :
let input = 'quick'
pigify(input)
expect: 'ickquay'

test: 'should add 'ay' to the end of words starting with consonants'
code :
let input = 'quick'
pigify(input)
expect: 'ickquay'

test: 'should take 'squeal' and return 'quealsay''
code :
let input = 'squeal'
pigify(input)
expect: 'quealsay'