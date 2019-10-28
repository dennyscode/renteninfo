require "application_system_test_case"

class RentenrechnersTest < ApplicationSystemTestCase
  setup do
    @rentenrechner = rentenrechners(:one)
  end

  test "visiting the index" do
    visit rentenrechners_url
    assert_selector "h1", text: "Rentenrechners"
  end

  test "creating a Rentenrechner" do
    visit rentenrechners_url
    click_on "New Rentenrechner"

    click_on "Create Rentenrechner"

    assert_text "Rentenrechner was successfully created"
    click_on "Back"
  end

  test "updating a Rentenrechner" do
    visit rentenrechners_url
    click_on "Edit", match: :first

    click_on "Update Rentenrechner"

    assert_text "Rentenrechner was successfully updated"
    click_on "Back"
  end

  test "destroying a Rentenrechner" do
    visit rentenrechners_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Rentenrechner was successfully destroyed"
  end
end
