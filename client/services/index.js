export function getUsers(callback) {

    const data = [{
        'label': 'Espresso',
        'value': 20
    }, {
        'label': 'Dubbel Espresso',
        'value': 3
    }, {
        'label': 'Macchiato',
        'value': 3
    }, {
        'label': 'Dubbel Macchiato',
        'value': 3
    }, {
        'label': 'Cortado',
        'value': 3
    }, {
        'label': 'Cappuccino',
        'value': 30
    }, {
        'label': 'Caffe Latte',
        'value': 30
    }, {
        'label': 'Brykkcafe',
        'value': 8
    }];

    callback(data, 4);

    setTimeout(function() {
        const data = [{
            'label': 'Espresso',
            'value': 8
        }, {
            'label': 'Dubbel Espresso',
            'value': 3
        }, {
            'label': 'Macchiato',
            'value': 3
        }, {
            'label': 'Dubbel Macchiato',
            'value': 3
        }, {
            'label': 'Cortado',
            'value': 3
        }, {
            'label': 'Capp',
            'value': 30
        }, {
            'label': 'Caffe Latte',
            'value': 30
        }, {
            'label': 'Brykkcafe',
            'value': 20
        }];
        callback(data, 3);
    }, 5000);

    setTimeout(function() {
        var data = [{
            'label': 'Espresso',
            'value': 8
        }, {
            'label': 'Dubbel Espresso',
            'value': 3
        }, {
            'label': 'Macchiato',
            'value': 3
        }, {
            'label': 'Dubbel Macchiato',
            'value': 3
        }, {
            'label': 'Cortado',
            'value': 3
        }, {
            'label': 'Cappuccino',
            'value': 10
        }, {
            'label': 'Caffe Latte',
            'value': 50
        }, {
            'label': 'Brykkcafe',
            'value': 20
        }];
        callback(data, 1);
    }, 10000);
};

