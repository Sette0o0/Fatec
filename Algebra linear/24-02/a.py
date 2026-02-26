a = [[30],[20],[15]]
b = [[27],[34],[15]]
ae = [[5],[3],[2]]
be = [[2],[4],[5]]
at = [(a[0] + ae[0]) + (a[1] + (ae[1])) + (a[2] + ae[2])]
bt = [(b[0] + be[0]) + (b[1] + (be[1])) + (b[2] + be[2])]
ab = [(at[0] * 0.9) + (at[1] * 0.9) + (at[2] * 0.9)]
bb = [(bt[0] * 0.9) + (bt[1] * 0.9) + (bt[2] * 0.9)]

print(f'Soma das matrizes: A {at} - B{bt}')
print(f'Soma das matrizes - 10%: A{ab} - B{bb}')