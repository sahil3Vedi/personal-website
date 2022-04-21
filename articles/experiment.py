layers = []

def forwardPass(input):
    current_activation = input
    for layer in layers:
        weight_multiplication = current_activation.matrixMultiply(layer.weightMatrix)
        current_activation = weight_multiplication.activate()
    return current_activation

learning_rate = 0.1

def backPropagate(error):
    current_layer = layers[-1]
    previous_layer = layers[-2]
    differential_matrix = current_layer.getDifferential()
    delta = differential_matrix.matrixMultiply(error.transpose())
    current_layer.weightMatrix -= learning_rate*((delta.matrixMultiply(previous_layer.activations)).transpose())
    for i in range(1,len(layers)-1):
        next_layer = layers[-i]
        current_layer = layers[-1-i]
        previous_layer = layers[-2-i]
        differential_matrix = current_layer.getDifferential()
        delta = (differential_matrix.matrixMultiply(next_layer.weightMatrix)).matrixMultiply(delta)
        current_layer.weightMatrix -= learning_rate*((delta.matrixMultiply(previous_layer.activations)).transpose())



