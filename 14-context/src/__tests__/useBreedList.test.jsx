import {expect, test} from "vitest";
import { render } from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import useBreedList from '../useBreedList';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            retry: false
        }
    }
})


function getBreedList(animal) {
    let list;

    function TestComponent () {
        list = useBreedList(animal)
        return null;
    }

    render(
        <QueryClientProvider client={queryClient}>
            <TestComponent  />
        </QueryClientProvider>
    )

    return list
};



// how to test useBreedList since hooks need a react coponent!

test('gives empty list when animal is provided', async () => {
    const [breedList, status] = getBreedList()
    expect(breedList).toHaveLength(0)
    expect(status).toBe("loading");
})