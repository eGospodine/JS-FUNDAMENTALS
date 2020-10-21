initial_health = 100
initial_bitcoins = 0
dungeon_rooms = input().split('|')

for i in range(len(dungeon_rooms)):
    tokens = dungeon_rooms[i].split()
    command = tokens[0]
    value = int(tokens[1])
    if command == 'potion':
        if value + initial_health <= 100:
            initial_health += value
            print(f'You healed for {value} hp.')
            print(f'Current health: {initial_health} hp.')
        else:
            print(f'You healed for {100 - initial_health} hp.')
            initial_health = 100
            print(f'Current health: {initial_health} hp.')
    elif command == 'chest':
        initial_bitcoins += value
        print(f'You found {value} bitcoins.')
    else:
        initial_health -= value
        if initial_health > 0:
            print(f'You slayed {command}.')
        else:
            print(f'You died! Killed by {command}.')
            print(f'Best room: {i + 1}')
            break
else:
    print(f'You\'ve made it!')
    print(f'Bitcoins: {initial_bitcoins}')
    print(f'Health: {initial_health}')