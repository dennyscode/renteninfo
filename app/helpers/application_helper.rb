module ApplicationHelper
    class ActionView::Helpers::FormBuilder
        # include ActionView::Helpers::TagHelper # I didn't need this.
        include ActionView::Helpers::FormTagHelper
        include ActionView::Helpers::FormOptionsHelper
        # include ActionView::Helpers::CaptureHelper  # I didn't need this.
        # include ActionView::Helpers::AssetTagHelper  # I didn't need this.

        # since these tag helpers just return strings, it is easy to make a pretty 
        # powerful helper.  It is probably possible to use existing Rails form 
        # helpers to aid this as well.
        def trix(method, options = {})
          value = (@object[method].empty?) ? '' : "value='#{@object[method]}'" 
          return "<input id='#{field_id(method)}' type='hidden' name='#{field_name(method)}' #{value}><trix-editor input='#{field_id(method)}' class='trix-content #{options[:class]}'></trix-editor>".html_safe
        end

        def field_name(label,index=nil)
          return @object_name + "[#{label}]"
        end

        def field_id(label,index=nil)
          return @object_name + "_#{label}"
        end

    end
end
