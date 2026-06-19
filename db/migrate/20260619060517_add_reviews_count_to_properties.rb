class AddReviewsCountToProperties < ActiveRecord::Migration[7.2]
  def change
    add_column :properties, :review_count, :integer
  end
end
