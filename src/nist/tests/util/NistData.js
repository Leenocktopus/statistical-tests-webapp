
const blockSizeTooltip = "Введіть число"
const templateTooltip = "Приклад: 001, 01"
export const data = {
    frequency: {
        ukrName: "Частотний тест",
        fields: {}
    },
    block_frequency: {
        ukrName: "Частотний тест у блоці",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            }
        }
    },
    runs: {
        ukrName: "Тест подібних послідовностей",
        fields: {}
    },
    longest_run_of_ones: {
        ukrName: "Тест послідовності одиниць",
        fields: {}
    },
    binary_matrix: {
        ukrName: "Тест рангів бінарних матриць",
        fields: {
            matrixSize: {
                ukrName: "Розмір матриці:",
                tooltip: blockSizeTooltip
            }
        }
    },
    spectral: {
        ukrName: "Спектральний тест",
        fields: {}
    },
    non_overlapping_template: {
        ukrName: "Тест шаблонів що не перетинаються",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            },
            template: {
                ukrName: "Шаблон:",
                tooltip: templateTooltip
            }
        }
    },
    overlapping_template: {
        ukrName: "Тест шаблонів що перетинаються",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            },
            template: {
                ukrName: "Шаблон:",
                tooltip: templateTooltip
            }
        }
    },
    maurers: {
        ukrName: "Універсальний тест Маурера",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            },
            blocksInInitSegment: {
                ukrName: "Кількість блоків:",
                tooltip: blockSizeTooltip
            }
        }
    },
    linear_complexity: {
        ukrName: "Тест на лінійну складність",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            }
        }
    },
    serial: {
        ukrName: "Серійний тест",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            }
        },
        resultDisplay: ["Перший тест", "Другий тест"]
    },
    entropy: {
        ukrName: "Тест приблизної ентропії",
        fields: {
            blockSize: {
                ukrName: "Розмір блоку:",
                tooltip: blockSizeTooltip
            }
        }
    },
    cumulative_sums: {
        ukrName: "Тест кумулятивних сум",
        fields: {},
        resultDisplay: ["Прямий тест", "Обернений тест"]
    },
    random_excursions: {
        ukrName: "Тест на довільні виключення",
        fields: {},
        resultDisplay: [-4,-3,-2,-1,1,2,3,4]
    },
    excursion_variant: {
        ukrName: "Тест на варіант довільних виключень",
        fields: {},
        resultDisplay: [-9,-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8,9]
    }
}