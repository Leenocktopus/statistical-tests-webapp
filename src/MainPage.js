import React, {Component} from 'react';


class MainPage extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className={"container"}>
                <div className={"main-page"}>
                    <div id={"banner"}>
                        <h1>RANDOM BITS</h1>
                        <p>Методи тестування бітових послідовностей на випадковість</p>
                    </div>
                    <div id={"main-page-grid"}>
                        <div>
                            <h3>Тестування бітових послідовностей </h3>
                            <p>
                                На сайті доступні методи тестування бітових послідовностей які рекомендовано до використання,
                                якщо є необхідність для перевірки якості генератора або двійкового рядка. Також, тести можна
                                завантажити у вигляді бібліотеки, або використовувати у вигляді API.
                            </p>

                            <h3>Тести NIST</h3>
                            <p>
                                Тести що засновані на перевірці гіпотез про випадковість послідовності.
                                В тесті виконується підрахунок деякої значущої статистики вхідного
                                рядку бітів і порівнюється з теоретичним значенням випадкової послідовності.
                                Відповідно до необхідного рівня впевненості обирається довірчий інтервал.
                            </p>
                            <p>
                                На веб-сайті є доступ до 15 окремих тестів що були описані в публікації NIST та
                                комплексного тесту, що являє собою виконання декількох тестів на одній послідовності
                                одночасно.
                            </p>
                            <p>
                                Головний недолік тестів: для отримання коректних результатів, довжина послідовності
                                повинна бути від щонайменше 100.
                            </p>
                            <h3>Тести багатовимірних статистик</h3>
                            <p>
                                Тести багатовимірних статистик замість однієї статистики як в NIST визначають одразу
                                декілька під час однієї перевірки. Такий підхід дозволяє краще оцінити послідовності
                                малої довжини, через більшу кількість можливих комбінацій, але не є ефективним для великих
                                послідовностей. При використанні тесту на велику послідовність якість результату буде доволі
                                сумнівною, адже кількість можливих комбінацій буде дуже великою.
                            </p>
                            <p>
                                Для перевірки послідовностей використовуються декілька шаблонів довжини 2 та 3 для
                                яких виконується пошук спільної вірогідності що і є результатом тесту.
                            </p>
                            <p>
                                На веб-сайті можна знайти 8 тестів для різних шаблонів і комплексний тест в якому можна
                                виконати декілька одночасно.
                            </p>
                        </div>
                        <div>
                            <h3>Корисні посилання:</h3>
                            <ol>
                                <li><a href={"https://csrc.nist.gov/projects/random-bit-generation/documentation-and-software"}>NIST Statistical Test Suite</a></li>
                                <li><a href={"http://simul.iro.umontreal.ca/testu01/tu01.html"}>TESTU01</a></li>
                                <li><a href={"https://webhome.phy.duke.edu/~rgb/General/dieharder.php"}>Dieharder: A Random Number Test Suite</a></li>
                                <li><a href={"https://www.semanticscholar.org/paper/The-Technique-for-Testing-Short-Sequences-as-a-of-Popereshnyak/a55f2828d58efe92f25ca953e4c54eac3c18d6cd"}> The Technique for Testing Short Sequences as a Component of Cryptography on the Internet of Things</a></li>
                                <li><a href={"https://github.com/"}>Бібліотека тестів</a></li>
                                <li><a href={"https://github.com/"}>API</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;