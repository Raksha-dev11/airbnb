import { Controller } from "@hotwired/stimulus"
import { enter, leave } from "el-transition"

export default class extends Controller {
    static targets = ['dropdown', 'openUserMenu']

    connect() {
        this.openUserMenuTarget.addEventListener("click", (e) => {
            e.stopPropagation();
            if (this.dropdownTarget.classList.contains("hidden")) {
                enter(this.dropdownTarget);
            } else {
                leave(this.dropdownTarget);
            }
        });

        document.addEventListener("click", (e) => {
            if (!this.element.contains(e.target) && !this.dropdownTarget.classList.contains("hidden")) {
                leave(this.dropdownTarget);
            }
        });
    }
}
