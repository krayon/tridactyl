/**
 * Allows users to enter tridactyl commands from the omnibox by using
 * the `:` keyword.
 */
import * as controller from "@src/lib/controller"

export async function inputEnteredListener(
    input: string, disposition:
    browser.omnibox.OnInputEnteredDisposition) {
    controller.acceptExCmd(input)
}

export async function init() {
    browser.omnibox.onInputEntered.addListener(inputEnteredListener)
    browser.omnibox.setDefaultSuggestion({
        description: `Execute a Tridactyl exstr (for example, "tabopen -c container www.google.com")`,
    })
}
