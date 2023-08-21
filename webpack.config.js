const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Путь к главному JavaScript файлу
    output: {
        filename: 'bundle.js', // Имя выходного файла
        path: path.resolve(__dirname, 'dist'), // Путь для сохранения сборки
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Расширение файлов для обработки SASS
                use: [
                    'style-loader', // Вставляет стили в DOM
                    'css-loader', // Переводит CSS в CommonJS
                    'sass-loader', // Компилирует SASS в CSS
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Путь к вашему HTML-шаблону
            filename: 'index.html', // Имя выходного HTML-файла
        }),
        // ... (другие плагины)
    ],
    devServer: {
        static: './dist', // Путь к статическим файлам для dev-сервера
    },
};
