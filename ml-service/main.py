from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

def main():
    print("Hello from ml-service!")


if __name__ == "__main__":
    main()
