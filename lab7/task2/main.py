from models import Book, Magazine


def show_library_status(items):
    print("\nLibrary Status:")
    for item in items:
        print(f"  • {item}")


def demonstrate_polymorphism(items):
    print("\nPolymorphism Demonstration:")
    for item in items:
        print(f"\nItem: {item}")
        print(f"Info: {item.get_info()}")

        if hasattr(item, 'read_sample'):
            print(f"Sample: {item.read_sample()}")
        if hasattr(item, 'browse'):
            print(f"Browse: {item.browse()}")


def main():
    print("Library Management System")

    print("\nCreating library items:")
    book1 = Book("War and Peace", 1869, "B001", "Leo Tolstoy", 1225)
    book2 = Book("Crime and Punishment", 1866, "B002", "Fyodor Dostoevsky", 430)
    magazine1 = Magazine("Forbes", 2024, "M001", 45, "Forbes Media")
    magazine2 = Magazine("National Geographic", 2023, "M002", 12, "NatGeo")

    items = [book1, book2, magazine1, magazine2]

    for item in items:
        print(f"  • Created: {item}")

    print("\nTesting book operations:")
    print(book1.get_info())
    print(book1.borrow())
    print(book1.read_sample())
    print(book1.return_item())

    print("\nTesting magazine operations:")
    print(magazine1.get_info())
    print(magazine1.browse())
    print(magazine1.borrow())

    demonstrate_polymorphism(items)

    show_library_status(items)

    print("\nReturning items:")
    for item in items:
        if not item._is_available:
            print(f"  • {item.return_item()}")

    show_library_status(items)


if __name__ == "__main__":
    main()