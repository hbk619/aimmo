from heapq import heappop, heappush

from simulation.direction import ALL_DIRECTIONS
from simulation.world_map import Cell, Location


# def heuristic(a, b):
#     return (b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2
def heuristic(location1, location2):
    deltaX = (location1.x - location2.x) ** 2
    deltaY = (location1.y - location2.y) ** 2
    return deltaX + deltaY


# A* search algorithm for a grid containing obstacles.
#  relys on a fairly simple principle: F = G + H
# where G= distance between current cell and start cell
#       H= estimated distance to the target cell
#        F= the "cost" of the given cell.
def find_path(world_state, start, goal):
    """
    Finds the shortest path between to cells on the grid.

    This algorithm takes into account if a cell is habitable or
    if it contains an avatar or not. 
    
    This returns the path as ordered list of direction
    """
    directions = list(ALL_DIRECTIONS)
    close_set = set()
    came_from = {}
    gscore = {start: 0}
    fscore = {start: heuristic(start, goal)}
    oheap = []

    heappush(oheap, (fscore[start], start))

    while oheap:

        current = heappop(oheap)[1]

        if current == goal:
            data = []
            while current in came_from:
                data.append(current)
                current = came_from[current]
            return data

        close_set.add(current)
        for direction in directions:
            neighbor = None
            location = current + direction

            if world_state.can_move_to(location):
                neighbor = world_state.get_cell(location).location
            else:
                continue

            tentative_g_score = gscore[current] + heuristic(current, neighbor)

            if neighbor in close_set and tentative_g_score >= gscore.get(neighbor, 0):
                continue

            if tentative_g_score < gscore.get(neighbor, 0) or neighbor not in [
                i[1] for i in oheap
            ]:
                came_from[neighbor] = current
                gscore[neighbor] = tentative_g_score
                fscore[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                heappush(oheap, (fscore[neighbor], neighbor))

    return False


def find_path_no_direction(world_state, start, goal):
    """
    Finds the shortest path between to cells on the grid.

    This algorithm takes into account if a cell is habitable or
    if it contains an avatar or not. 
    
    This returns the path as an ordered list.
    """
    directions = [ALL_DIRECTIONS]
    close_set = set()
    came_from = {}
    gscore = {start: 0}
    fscore = {start: heuristic(start, goal)}
    oheap = []

    heappush(oheap, (fscore[start], start))

    while oheap:

        current = heappop(oheap)[1]

        if current == goal:
            data = []
            while current in came_from:
                data.append(current)
                current = came_from[current]
            return data

        close_set.add(current)
        for direction in directions:
            neighbor = None
            location = current + direction

            if world_state.can_move_to(location):
                neighbor = world_state.get_cell(location).location

            tentative_g_score = gscore[current] + heuristic(current, neighbor)

            if neighbor in close_set and tentative_g_score >= gscore.get(neighbor, 0):
                continue

            if tentative_g_score < gscore.get(neighbor, 0) or neighbor not in [
                i[1] for i in oheap
            ]:
                came_from[neighbor] = current
                gscore[neighbor] = tentative_g_score
                fscore[neighbor] = tentative_g_score + heuristic(neighbor, goal)
                heappush(oheap, (fscore[neighbor], neighbor))

    return False
