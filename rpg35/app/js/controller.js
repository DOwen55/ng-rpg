function characterController($scope) {
    $scope.characterRenderer = new characterRendererer();
}

function attribute(initValue, key)
{
    this.key = key;
    this.rawValue = initValue;
    this.userModifier = 0;
    this.finalValue = initValue + this.userModifier;
    this.calcModifier = 0;

    this.recalcAttribute = function()
    {
        this.finalValue = (this.rawValue + this.userModifier);

        this.calcModifier = attributeModifier( this.finalValue);
    }

    this.recalcAttribute();
}

// Make this a service.
function character() {

    var attributes = [];
    attributes.push(new attribute(10, 'str'));
    attributes.push(new attribute(10, 'dex'));
    attributes.push(new attribute(10, 'con'));
    attributes.push(new attribute(10, 'int'));
    attributes.push(new attribute(10, 'wis'));
    attributes.push(new attribute(10, 'char'));

    return {
        'attributes': attributes,
        'ac': 0,
        'hp': 0,
        'init': 0,
        'def1': 0,
        'def2': 0,
        'def3': 0
    };
}


function characterRendererer()
{
    this.character = character();

    this.recalcCharacter = function()
    {
        for(var attribCounter = 0; attribCounter < this.character.attributes.length -1; attribCounter++)
        {
            this.character.attributes[attribCounter].recalcAttribute();

            if(this.character.attributes[attribCounter].key === 'dex')
            {
                this.character.ac = this.character.attributes[attribCounter].calcModifier;
            }
        }

    }
}

function attributeModifier(attr) {
    switch(attr)
    {
        case 3:
        {return -4;}

        case 4:
        case 5:
        {return -3}

        case 6:
        case 7:
        { return -2;}

        case 8:
        case 9:
        {return -1;}

        case 10:
        case 11:
        {return 0;}

        case 12:
        case 13:
        {return 1;}

        case 14:
        case 15:
        {return 2;}

        case 16:
        case 17:
        {return 3;}

        case 18:
        case 19:
        {return 4;}

    }
}