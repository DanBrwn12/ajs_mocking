import { getLevel } from "../index"

import fetchData from "../http"

jest.mock("../http")


describe("getLevel", () => {

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("вывод level со статусом ok", () => {
        fetchData.mockReturnValue({
            status: "ok",
            level: 42
        })

        const result = getLevel(1)

        expect(result).toBe("Ваш текущий уровень: 42")

        expect(fetchData).toHaveBeenCalledWith("https://server/user/1")
    })

    it("вывод сообщения со статусом error", () => {
        fetchData.mockReturnValue({
            status: "error"
        })

        const result = getLevel(5)

        expect(result).toBe("Информация об уровне временно недоступна")

        expect(fetchData).toHaveBeenCalledWith("https://server/user/5")
    })
})