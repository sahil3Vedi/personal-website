layers = []

def forwardPass(input):
    current_activation = input
    for layer in layers:
        weight_multiplication = current_activation.matrixMultiply(layer.weightMatrix)
        current_activation = weight_multiplication.activate()
    return current_activation