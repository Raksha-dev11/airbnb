class AddPriceCentsToProperties < ActiveRecord::Migration[7.2]
  def change
    add_column :properties, :price_cents, :integer
  end
end
