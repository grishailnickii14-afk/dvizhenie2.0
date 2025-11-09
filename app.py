from flask import Flask, render_template

app = Flask(
    __name__,
    template_folder="templates",   # Папка с HTML-шаблонами
    static_folder="static"         # Папка со статикой (CSS, JS, изображения)
)

@app.route("/")
def home():
    """Главная страница"""
    return render_template("index.html")

if __name__ == "__main__":
    # debug=True только для локальной разработки
    app.run(host="0.0.0.0", port=5000, debug=True)
