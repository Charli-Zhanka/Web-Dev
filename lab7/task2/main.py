from models import Animal, Dog, Cat

animal = Animal("Generic Animal", 5, "brown")
dog = Dog("Rex", 3, "golden", "Labrador")
cat = Cat("Whiskers", 2, "white", True)

animals = [animal, dog, cat]

for a in animals:
    print(a)
    print(f"  Sound: {a.speak()}")
    print(f"  Action: {a.move()}")
    if isinstance(a, Dog):
        print(f"  Special: {a.fetch()}")
    elif isinstance(a, Cat):
        print(f"  Special: {a.scratch()}")
    print()