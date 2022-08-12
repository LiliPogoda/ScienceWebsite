#%%
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 100, 100)
y = x*2+3

fig1, ax1 = plt.subplots()
ax1.set_aspect('equal')
ax1.set_title("Test Plotting")
ax1.plot(x, y)

fig1

# %%
