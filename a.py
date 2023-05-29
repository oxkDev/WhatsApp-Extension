# a = 0

# for m in range(1, 101):
#     for n in range(101, 206):
#         if (((3**m) + (7**n)) % 10) == 0:
#             a += 1
#             # print(m, n)


# print(a)


def isPrime(a):
    for i in range(2, a):
        if a % i == 0:
            return False;
    return True;

# pri = [2]
# p = 3

# while len(pri) != 64:
#     if isPrime(p):
#         pri.append(p)
#     p += 1;

# print(pri)

# a = 0
# rl = range(2, 10)
# sl = [22, 33, 44, 55, 66, 77, 88, 99]
# tl = [202, 303, 404, 505, 606, 707, 808, 909]

# prods = []
# for r in rl:
#     for s in sl:
#         for t in tl:
#             if not (r*s*t in prods):
#                 prods.append(r*s*t)

# print(len(prods))
i = 2
primes = [i for i in range(2, 20000) if isPrime(i)]

# while i in range(20000):
#     i += 1
#     if isPrime(i):
#         print(i)

# print(primes)


a = 0

# for i in range(1, 20001):

#     if i not in primes:
#         isA = 0
#         for n in range(1, 2*i + 1):
#             if 2*i % n == 0:
#                 isA += 1;
#             if isA == 65:
#                 isA = -1
#                 break;

#         isB = 0
#         for n in range(1, 5*i + 1):
#             if 5*i % n == 0:
#                 isB += 1;
#             if isB == 61:
#                 isB = -1
#                 break;

#         if isA == 64 and isB == 60:
#             a += 1;
#         if i % 100 == 0: print(i)

def printCus(*values: object,
    sep: str | None = " ",
    end: str | None = "\n"):
    if False: print(*values, sep=sep, end=end)
for i in range(50, 1001):
# if True:
#     i = 961
    A = 0
    for a in range(1, i + 1):
        if i%a == 0:
            A += 1;
            printCus("a", a)
    B = 0
    for b in range(1, i*2 + 1):
        if (i*2)%b == 0:
            B += 1;
            printCus("b", b)
    
    A2 = 0;
    for a2 in primes[: i]:
        ia = int(i)
        while ia%a2 == 0:
            A2 += 1;
            ia /= a2
            ia = int(ia)
            printCus("a2", ia, a2)
    
    B2 = 0;
    for b2 in primes[1: i*2]:
        ib = int(i)
        while (ib*2)%b2 == 0 and ib != 0:
            B2 += 1;
            ib /= b2
            ib = int(ib)
            printCus("b2", ib, b2)
    
    print(i, A-2, B-2, A2, B2)